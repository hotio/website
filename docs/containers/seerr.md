---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag16336" onclick="CopyToClipboard('tag16336');return false;" class="tag-decoration">nightly</div><div id="tag2077" onclick="CopyToClipboard('tag2077');return false;" class="tag-decoration">nightly-e056304</div><div id="tag26756" onclick="CopyToClipboard('tag26756');return false;" class="tag-decoration">nightly-5ae70d05e1ee123b3cda43153ed415754fd8e816</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/e0563045329b504cde55e60a35f23e5ab7adfcb5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/29310830085" target="_blank">2026-07-14 06:15:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30910" onclick="CopyToClipboard('tag30910');return false;" class="tag-decoration">release</div><div id="tag2731" onclick="CopyToClipboard('tag2731');return false;" class="tag-decoration">release-a4634aa</div><div id="tag21280" onclick="CopyToClipboard('tag21280');return false;" class="tag-decoration">release-3.3.0</div><div id="tag2262" onclick="CopyToClipboard('tag2262');return false;" class="tag-decoration">release-v3</div><div id="tag17565" onclick="CopyToClipboard('tag17565');return false;" class="tag-decoration">release-v3.3</div><div id="tag24201" onclick="CopyToClipboard('tag24201');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/a4634aab17d7ca4062a91bdde280533273170393" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/29310821255" target="_blank">2026-07-14 06:15:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
