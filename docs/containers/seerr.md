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
<tr><td><div id="tag27191" onclick="CopyToClipboard('tag27191');return false;" class="tag-decoration">nightly</div><div id="tag16700" onclick="CopyToClipboard('tag16700');return false;" class="tag-decoration">nightly-a58d7b9</div><div id="tag31690" onclick="CopyToClipboard('tag31690');return false;" class="tag-decoration">nightly-5ae70d05e1ee123b3cda43153ed415754fd8e816</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/a58d7b92d76f81476497871a6cb6a410171d80ac" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/28719588723" target="_blank">2026-07-04 21:03:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16926" onclick="CopyToClipboard('tag16926');return false;" class="tag-decoration">release</div><div id="tag27762" onclick="CopyToClipboard('tag27762');return false;" class="tag-decoration">release-2343b75</div><div id="tag17150" onclick="CopyToClipboard('tag17150');return false;" class="tag-decoration">release-3.3.0</div><div id="tag3616" onclick="CopyToClipboard('tag3616');return false;" class="tag-decoration">release-v3</div><div id="tag22252" onclick="CopyToClipboard('tag22252');return false;" class="tag-decoration">release-v3.3</div><div id="tag30325" onclick="CopyToClipboard('tag30325');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/2343b7510b16f30ee4cd28c5c9a6b8bd512a7d5c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/28601349637" target="_blank">2026-07-02 15:20:45</a></td></tr>
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
