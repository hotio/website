---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag12459" onclick="CopyToClipboard('tag12459');return false;" class="tag-decoration">nightly</div><div id="tag7739" onclick="CopyToClipboard('tag7739');return false;" class="tag-decoration">nightly-fca0048</div><div id="tag5563" onclick="CopyToClipboard('tag5563');return false;" class="tag-decoration">nightly-3.1.2.4914</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/fca0048ce1f4bef7c4cbe0cda4722748825e8132" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21246753168" target="_blank">2026-01-22 11:28:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13063" onclick="CopyToClipboard('tag13063');return false;" class="tag-decoration">release</div><div id="tag21842" onclick="CopyToClipboard('tag21842');return false;" class="tag-decoration">release-9db40f7</div><div id="tag30486" onclick="CopyToClipboard('tag30486');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/9db40f7860709c06353af3cc54d9599f08f2ad73" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21244697529" target="_blank">2026-01-22 10:18:58</a></td></tr>
<tr><td><div id="tag32635" onclick="CopyToClipboard('tag32635');return false;" class="tag-decoration">testing</div><div id="tag15137" onclick="CopyToClipboard('tag15137');return false;" class="tag-decoration">testing-203f137</div><div id="tag8941" onclick="CopyToClipboard('tag8941');return false;" class="tag-decoration">testing-3.1.2.4902</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/203f137f853de41c68d5f395d8592b540dc14404" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21244698999" target="_blank">2026-01-22 10:19:05</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
