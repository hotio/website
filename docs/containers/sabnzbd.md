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
<tr><td><div id="tag13625" onclick="CopyToClipboard('tag13625');return false;" class="tag-decoration">nightly</div><div id="tag45" onclick="CopyToClipboard('tag45');return false;" class="tag-decoration">nightly-ed09cc6</div><div id="tag1861" onclick="CopyToClipboard('tag1861');return false;" class="tag-decoration">nightly-2b26ff96f1c77fa5000f2820e59e1b99bd66903c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/ed09cc6b96436229547c4832253e2f89387cba4a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/36732363993" target="_blank">2026-09-30 14:52:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12922" onclick="CopyToClipboard('tag12922');return false;" class="tag-decoration">release</div><div id="tag3345" onclick="CopyToClipboard('tag3345');return false;" class="tag-decoration">release-6c0939f</div><div id="tag20253" onclick="CopyToClipboard('tag20253');return false;" class="tag-decoration">release-5.1.3</div><div id="tag21933" onclick="CopyToClipboard('tag21933');return false;" class="tag-decoration">release-v5</div><div id="tag21201" onclick="CopyToClipboard('tag21201');return false;" class="tag-decoration">release-v5.1</div><div id="tag10990" onclick="CopyToClipboard('tag10990');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/6c0939f9f34b785658f21ebd636970ad04d06342" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35941384203" target="_blank">2026-09-24 01:05:28</a></td></tr>
<tr><td><div id="tag13580" onclick="CopyToClipboard('tag13580');return false;" class="tag-decoration">testing</div><div id="tag25027" onclick="CopyToClipboard('tag25027');return false;" class="tag-decoration">testing-c67c540</div><div id="tag24659" onclick="CopyToClipboard('tag24659');return false;" class="tag-decoration">testing-5.2.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c67c5402c62d1bc239e36a7302735fbe5c68d2f6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/36732365425" target="_blank">2026-09-30 14:52:09</a></td></tr>
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
