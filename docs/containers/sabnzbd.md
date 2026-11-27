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
<tr><td><div id="tag26316" onclick="CopyToClipboard('tag26316');return false;" class="tag-decoration">nightly</div><div id="tag16073" onclick="CopyToClipboard('tag16073');return false;" class="tag-decoration">nightly-6019a32</div><div id="tag7424" onclick="CopyToClipboard('tag7424');return false;" class="tag-decoration">nightly-93997ee9c9e7223af631dc330f9541fb26a9ae0b</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/6019a3261632b833d7ce593124fe6e72c7c5c2b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45743812648" target="_blank">2026-11-26 02:38:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18357" onclick="CopyToClipboard('tag18357');return false;" class="tag-decoration">release</div><div id="tag12621" onclick="CopyToClipboard('tag12621');return false;" class="tag-decoration">release-b8b78b4</div><div id="tag25243" onclick="CopyToClipboard('tag25243');return false;" class="tag-decoration">release-5.1.3</div><div id="tag8564" onclick="CopyToClipboard('tag8564');return false;" class="tag-decoration">release-v5</div><div id="tag16120" onclick="CopyToClipboard('tag16120');return false;" class="tag-decoration">release-v5.1</div><div id="tag1411" onclick="CopyToClipboard('tag1411');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b8b78b4becde7daba45889283cbabc5df2e73464" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45743817892" target="_blank">2026-11-26 02:38:54</a></td></tr>
<tr><td><div id="tag30639" onclick="CopyToClipboard('tag30639');return false;" class="tag-decoration">testing</div><div id="tag5351" onclick="CopyToClipboard('tag5351');return false;" class="tag-decoration">testing-3dbbb9a</div><div id="tag3812" onclick="CopyToClipboard('tag3812');return false;" class="tag-decoration">testing-5.2.0RC3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/3dbbb9ad96421f8d85ed4e86d19022301bcb3d58" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/46007550553" target="_blank">2026-11-27 13:29:30</a></td></tr>
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
