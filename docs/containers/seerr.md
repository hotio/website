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
<tr><td><div id="tag26481" onclick="CopyToClipboard('tag26481');return false;" class="tag-decoration">nightly</div><div id="tag23909" onclick="CopyToClipboard('tag23909');return false;" class="tag-decoration">nightly-163c3fb</div><div id="tag17707" onclick="CopyToClipboard('tag17707');return false;" class="tag-decoration">nightly-4b65ab507d6317fec80603acc9fbad63db9ca392</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/163c3fb3a4e56ba1b7be35790a9538035e726f66" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/30141841609" target="_blank">2026-07-25 03:12:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag94" onclick="CopyToClipboard('tag94');return false;" class="tag-decoration">release</div><div id="tag27631" onclick="CopyToClipboard('tag27631');return false;" class="tag-decoration">release-141b813</div><div id="tag9030" onclick="CopyToClipboard('tag9030');return false;" class="tag-decoration">release-3.3.0</div><div id="tag4506" onclick="CopyToClipboard('tag4506');return false;" class="tag-decoration">release-v3</div><div id="tag2889" onclick="CopyToClipboard('tag2889');return false;" class="tag-decoration">release-v3.3</div><div id="tag29012" onclick="CopyToClipboard('tag29012');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/141b8133bc9ef2ae4a8c24eeaff795129d5e7330" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/29681390598" target="_blank">2026-07-19 09:20:08</a></td></tr>
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
