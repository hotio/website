---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag1542" onclick="CopyToClipboard('tag1542');return false;" class="tag-decoration">nightly</div><div id="tag6975" onclick="CopyToClipboard('tag6975');return false;" class="tag-decoration">nightly-6670b12</div><div id="tag11725" onclick="CopyToClipboard('tag11725');return false;" class="tag-decoration">nightly-90798e5e4dcbd2e45bc0aa36f95de482e08b8cea</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/6670b129a8924a76ff2747babbb24c59c0329e3c" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25701903601" target="_blank">2026-05-11 22:48:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13028" onclick="CopyToClipboard('tag13028');return false;" class="tag-decoration">release</div><div id="tag5192" onclick="CopyToClipboard('tag5192');return false;" class="tag-decoration">release-ce09a26</div><div id="tag8408" onclick="CopyToClipboard('tag8408');return false;" class="tag-decoration">release-5.0.1</div><div id="tag8521" onclick="CopyToClipboard('tag8521');return false;" class="tag-decoration">release-v5</div><div id="tag32739" onclick="CopyToClipboard('tag32739');return false;" class="tag-decoration">release-v5.0</div><div id="tag23967" onclick="CopyToClipboard('tag23967');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ce09a264d40b4b3afc8c0f680f9b4ea20bdf4566" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25700567412" target="_blank">2026-05-11 22:16:59</a></td></tr>
<tr><td><div id="tag3543" onclick="CopyToClipboard('tag3543');return false;" class="tag-decoration">testing</div><div id="tag8483" onclick="CopyToClipboard('tag8483');return false;" class="tag-decoration">testing-651b306</div><div id="tag32383" onclick="CopyToClipboard('tag32383');return false;" class="tag-decoration">testing-5.0.2RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/651b3063fdaf2483cccd2865325818410919c19f" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25701913451" target="_blank">2026-05-11 22:49:04</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
