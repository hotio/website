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
<tr><td><div id="tag22760" onclick="CopyToClipboard('tag22760');return false;" class="tag-decoration">nightly</div><div id="tag481" onclick="CopyToClipboard('tag481');return false;" class="tag-decoration">nightly-3.1.2.4902</div><div id="tag16749" onclick="CopyToClipboard('tag16749');return false;" class="tag-decoration">nightly-73a8c48</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/73a8c48794ec64c451958ccb46c646e73e610304" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20892085148" target="_blank">2026-01-11 08:19:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26721" onclick="CopyToClipboard('tag26721');return false;" class="tag-decoration">release</div><div id="tag1108" onclick="CopyToClipboard('tag1108');return false;" class="tag-decoration">release-3.1.0.4875</div><div id="tag23810" onclick="CopyToClipboard('tag23810');return false;" class="tag-decoration">release-5a5f3dc</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/5a5f3dce4d52331a8384bc8120eb475a511eadb7" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20850335075" target="_blank">2026-01-09 11:22:51</a></td></tr>
<tr><td><div id="tag25320" onclick="CopyToClipboard('tag25320');return false;" class="tag-decoration">testing</div><div id="tag2251" onclick="CopyToClipboard('tag2251');return false;" class="tag-decoration">testing-3.1.2.4902</div><div id="tag13492" onclick="CopyToClipboard('tag13492');return false;" class="tag-decoration">testing-d0d77c7</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/d0d77c73b27e6980ea9f19be507445c7271aeb28" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20850335823" target="_blank">2026-01-09 11:22:53</a></td></tr>
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
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

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
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
