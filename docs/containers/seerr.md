---
hide:
  - toc
title: hotio/seerr
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
<tr><td><div id="tag2858" onclick="CopyToClipboard('tag2858');return false;" class="tag-decoration">nightly</div><div id="tag8795" onclick="CopyToClipboard('tag8795');return false;" class="tag-decoration">nightly-3f8d749</div><div id="tag4857" onclick="CopyToClipboard('tag4857');return false;" class="tag-decoration">nightly-854effb3ea8f05993e5d943ad1b4d6274aabb334</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/3f8d749544457392e5b200b9e5d98bdc21c991f3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/43134282314" target="_blank">2026-11-12 01:24:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9194" onclick="CopyToClipboard('tag9194');return false;" class="tag-decoration">release</div><div id="tag13282" onclick="CopyToClipboard('tag13282');return false;" class="tag-decoration">release-01def42</div><div id="tag7167" onclick="CopyToClipboard('tag7167');return false;" class="tag-decoration">release-3.5.2</div><div id="tag2965" onclick="CopyToClipboard('tag2965');return false;" class="tag-decoration">release-v3</div><div id="tag179" onclick="CopyToClipboard('tag179');return false;" class="tag-decoration">release-v3.5</div><div id="tag9706" onclick="CopyToClipboard('tag9706');return false;" class="tag-decoration">release-v3.5.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/01def42c59a2351ced3a757e0263feabd3a2b6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/43275363722" target="_blank">2026-11-12 18:00:40</a></td></tr>
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
