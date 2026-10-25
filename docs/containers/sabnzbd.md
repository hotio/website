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
<tr><td><div id="tag30851" onclick="CopyToClipboard('tag30851');return false;" class="tag-decoration">nightly</div><div id="tag16878" onclick="CopyToClipboard('tag16878');return false;" class="tag-decoration">nightly-9699140</div><div id="tag31832" onclick="CopyToClipboard('tag31832');return false;" class="tag-decoration">nightly-d162e0f290d70a96dd33e80ccd4d552d4447a8de</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/96991400277922e2295e308b2ea9afe10925837e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40219811889" target="_blank">2026-10-25 18:08:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11776" onclick="CopyToClipboard('tag11776');return false;" class="tag-decoration">release</div><div id="tag32341" onclick="CopyToClipboard('tag32341');return false;" class="tag-decoration">release-110f8b3</div><div id="tag18727" onclick="CopyToClipboard('tag18727');return false;" class="tag-decoration">release-5.1.3</div><div id="tag27357" onclick="CopyToClipboard('tag27357');return false;" class="tag-decoration">release-v5</div><div id="tag1660" onclick="CopyToClipboard('tag1660');return false;" class="tag-decoration">release-v5.1</div><div id="tag22143" onclick="CopyToClipboard('tag22143');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/110f8b306f472ed4a3775d2b746ede706ce049b4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40219808621" target="_blank">2026-10-25 18:08:17</a></td></tr>
<tr><td><div id="tag22253" onclick="CopyToClipboard('tag22253');return false;" class="tag-decoration">testing</div><div id="tag10143" onclick="CopyToClipboard('tag10143');return false;" class="tag-decoration">testing-0e5dbb4</div><div id="tag6208" onclick="CopyToClipboard('tag6208');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/0e5dbb4cef11271c23c4db43f34b9f53f2b65d46" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40085421132" target="_blank">2026-10-24 10:18:57</a></td></tr>
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
