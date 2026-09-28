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
<tr><td><div id="tag2547" onclick="CopyToClipboard('tag2547');return false;" class="tag-decoration">nightly</div><div id="tag13296" onclick="CopyToClipboard('tag13296');return false;" class="tag-decoration">nightly-4950256</div><div id="tag4760" onclick="CopyToClipboard('tag4760');return false;" class="tag-decoration">nightly-d4a27077786d653ff9b9603cb5375da1119ebb78</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/49502562c9da1224151835e199411067705c973f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/36465328924" target="_blank">2026-09-28 18:27:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12259" onclick="CopyToClipboard('tag12259');return false;" class="tag-decoration">release</div><div id="tag9088" onclick="CopyToClipboard('tag9088');return false;" class="tag-decoration">release-6c0939f</div><div id="tag17752" onclick="CopyToClipboard('tag17752');return false;" class="tag-decoration">release-5.1.3</div><div id="tag4752" onclick="CopyToClipboard('tag4752');return false;" class="tag-decoration">release-v5</div><div id="tag16703" onclick="CopyToClipboard('tag16703');return false;" class="tag-decoration">release-v5.1</div><div id="tag2995" onclick="CopyToClipboard('tag2995');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/6c0939f9f34b785658f21ebd636970ad04d06342" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35941384203" target="_blank">2026-09-24 01:05:28</a></td></tr>
<tr><td><div id="tag3762" onclick="CopyToClipboard('tag3762');return false;" class="tag-decoration">testing</div><div id="tag30039" onclick="CopyToClipboard('tag30039');return false;" class="tag-decoration">testing-20a267d</div><div id="tag25807" onclick="CopyToClipboard('tag25807');return false;" class="tag-decoration">testing-5.2.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/20a267daf4fdc45bf36c0d589e3921a2c159bf45" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35941399602" target="_blank">2026-09-24 01:05:41</a></td></tr>
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
