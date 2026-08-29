---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag14792" onclick="CopyToClipboard('tag14792');return false;" class="tag-decoration">nightly</div><div id="tag8948" onclick="CopyToClipboard('tag8948');return false;" class="tag-decoration">nightly-ebd1497</div><div id="tag28640" onclick="CopyToClipboard('tag28640');return false;" class="tag-decoration">nightly-2.6.2.5583</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/ebd14979084e9b25ac093800155df473d899f2fb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/33229348862" target="_blank">2026-08-29 02:35:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21967" onclick="CopyToClipboard('tag21967');return false;" class="tag-decoration">release</div><div id="tag3420" onclick="CopyToClipboard('tag3420');return false;" class="tag-decoration">release-ce2ef1f</div><div id="tag1977" onclick="CopyToClipboard('tag1977');return false;" class="tag-decoration">release-2.5.2.5491</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/ce2ef1f60b8795ded0bb17653ba5a1fc57d72a33" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/32915984899" target="_blank">2026-08-26 00:39:52</a></td></tr>
<tr><td><div id="tag16171" onclick="CopyToClipboard('tag16171');return false;" class="tag-decoration">testing</div><div id="tag14565" onclick="CopyToClipboard('tag14565');return false;" class="tag-decoration">testing-8ce8e54</div><div id="tag31207" onclick="CopyToClipboard('tag31207');return false;" class="tag-decoration">testing-2.6.2.5562</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/8ce8e54266aba39b89e4e853bbc86d6887173c19" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/32915984195" target="_blank">2026-08-26 00:39:51</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
