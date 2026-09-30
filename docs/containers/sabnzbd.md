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
<tr><td><div id="tag1893" onclick="CopyToClipboard('tag1893');return false;" class="tag-decoration">nightly</div><div id="tag7413" onclick="CopyToClipboard('tag7413');return false;" class="tag-decoration">nightly-9ce5742</div><div id="tag21974" onclick="CopyToClipboard('tag21974');return false;" class="tag-decoration">nightly-d7d6fcd133eb1e237a9baf530032df4d684bb314</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/9ce5742c31fb1437f765a049b70c4d0283d663c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/36687045290" target="_blank">2026-09-30 08:00:28</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22636" onclick="CopyToClipboard('tag22636');return false;" class="tag-decoration">release</div><div id="tag12565" onclick="CopyToClipboard('tag12565');return false;" class="tag-decoration">release-6c0939f</div><div id="tag2163" onclick="CopyToClipboard('tag2163');return false;" class="tag-decoration">release-5.1.3</div><div id="tag31864" onclick="CopyToClipboard('tag31864');return false;" class="tag-decoration">release-v5</div><div id="tag24619" onclick="CopyToClipboard('tag24619');return false;" class="tag-decoration">release-v5.1</div><div id="tag27778" onclick="CopyToClipboard('tag27778');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/6c0939f9f34b785658f21ebd636970ad04d06342" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35941384203" target="_blank">2026-09-24 01:05:28</a></td></tr>
<tr><td><div id="tag7044" onclick="CopyToClipboard('tag7044');return false;" class="tag-decoration">testing</div><div id="tag1168" onclick="CopyToClipboard('tag1168');return false;" class="tag-decoration">testing-20a267d</div><div id="tag17452" onclick="CopyToClipboard('tag17452');return false;" class="tag-decoration">testing-5.2.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/20a267daf4fdc45bf36c0d589e3921a2c159bf45" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35941399602" target="_blank">2026-09-24 01:05:41</a></td></tr>
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
