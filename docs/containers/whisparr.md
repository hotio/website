---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12933" onclick="CopyToClipboard('tag12933');return false;" class="tag-decoration">v2</div><div id="tag30142" onclick="CopyToClipboard('tag30142');return false;" class="tag-decoration">v2-ab04a10</div><div id="tag15750" onclick="CopyToClipboard('tag15750');return false;" class="tag-decoration">v2-2.0.0.2130</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ab04a1047cfb64e77ab60fbb7ae7f686cfc39a55" target="_blank">v2</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21097472201" target="_blank">2026-01-17 16:33:31</a></td></tr>
<tr><td><div id="tag11149" onclick="CopyToClipboard('tag11149');return false;" class="tag-decoration">v3</div><div id="tag12865" onclick="CopyToClipboard('tag12865');return false;" class="tag-decoration">v3-07f5eac</div><div id="tag7785" onclick="CopyToClipboard('tag7785');return false;" class="tag-decoration">v3-3.2.0-release.27</div><div id="tag8525" onclick="CopyToClipboard('tag8525');return false;" class="tag-decoration">v3-v3</div><div id="tag18176" onclick="CopyToClipboard('tag18176');return false;" class="tag-decoration">v3-v3.2</div><div id="tag2726" onclick="CopyToClipboard('tag2726');return false;" class="tag-decoration">v3-v3.2.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/07f5eacc59d2a649e33eb325549af74defcd26f6" target="_blank">use new binary locations</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21097360175" target="_blank">2026-01-17 16:24:25</a></td></tr>
<tr><td><div id="tag29510" onclick="CopyToClipboard('tag29510');return false;" class="tag-decoration">v3-develop</div><div id="tag5646" onclick="CopyToClipboard('tag5646');return false;" class="tag-decoration">v3-develop-7734865</div><div id="tag16730" onclick="CopyToClipboard('tag16730');return false;" class="tag-decoration">v3-develop-3.2.0-develop.43</div><div id="tag8946" onclick="CopyToClipboard('tag8946');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag4731" onclick="CopyToClipboard('tag4731');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag26388" onclick="CopyToClipboard('tag26388');return false;" class="tag-decoration">v3-develop-v3.2.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/77348655acd1a7df676c2f7b83ae6bea5e07427a" target="_blank">Version update: 3.2.0-develop.41 => 3.2.0-develop.43</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21108081905" target="_blank">2026-01-18 07:29:13</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
