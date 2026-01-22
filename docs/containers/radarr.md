---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag14919" onclick="CopyToClipboard('tag14919');return false;" class="tag-decoration">nightly</div><div id="tag1113" onclick="CopyToClipboard('tag1113');return false;" class="tag-decoration">nightly-d4e6656</div><div id="tag18304" onclick="CopyToClipboard('tag18304');return false;" class="tag-decoration">nightly-6.1.1.10317</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/d4e6656833af30c09c67e3d59e4f94ec88e54eaf" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/21243862952" target="_blank">2026-01-22 09:51:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15126" onclick="CopyToClipboard('tag15126');return false;" class="tag-decoration">release</div><div id="tag31460" onclick="CopyToClipboard('tag31460');return false;" class="tag-decoration">release-5743090</div><div id="tag5337" onclick="CopyToClipboard('tag5337');return false;" class="tag-decoration">release-6.0.4.10291</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/5743090a2daad47c73861b6cb44cd5c2c459d9f9" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/21244717058" target="_blank">2026-01-22 10:19:44</a></td></tr>
<tr><td><div id="tag352" onclick="CopyToClipboard('tag352');return false;" class="tag-decoration">testing</div><div id="tag30465" onclick="CopyToClipboard('tag30465');return false;" class="tag-decoration">testing-6020689</div><div id="tag19160" onclick="CopyToClipboard('tag19160');return false;" class="tag-decoration">testing-6.1.1.10317</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/60206899b5c06f9913af138b257b8612598a590f" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/21244718049" target="_blank">2026-01-22 10:19:46</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
