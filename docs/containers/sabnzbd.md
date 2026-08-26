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
<tr><td><div id="tag30324" onclick="CopyToClipboard('tag30324');return false;" class="tag-decoration">nightly</div><div id="tag24246" onclick="CopyToClipboard('tag24246');return false;" class="tag-decoration">nightly-87897cd</div><div id="tag10615" onclick="CopyToClipboard('tag10615');return false;" class="tag-decoration">nightly-f498147189f325393c5b762279b8cf708aa37e56</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/87897cdd6e6b5ae0e20586c8ed80458f2886f349" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32842206373" target="_blank">2026-08-25 11:25:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2921" onclick="CopyToClipboard('tag2921');return false;" class="tag-decoration">release</div><div id="tag28840" onclick="CopyToClipboard('tag28840');return false;" class="tag-decoration">release-c77e1d1</div><div id="tag27763" onclick="CopyToClipboard('tag27763');return false;" class="tag-decoration">release-5.1.2</div><div id="tag2487" onclick="CopyToClipboard('tag2487');return false;" class="tag-decoration">release-v5</div><div id="tag22240" onclick="CopyToClipboard('tag22240');return false;" class="tag-decoration">release-v5.1</div><div id="tag2540" onclick="CopyToClipboard('tag2540');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c77e1d113da93e02e23a53f679612b1db77f7263" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918043872" target="_blank">2026-08-26 01:11:35</a></td></tr>
<tr><td><div id="tag25297" onclick="CopyToClipboard('tag25297');return false;" class="tag-decoration">testing</div><div id="tag31332" onclick="CopyToClipboard('tag31332');return false;" class="tag-decoration">testing-3af11ba</div><div id="tag3214" onclick="CopyToClipboard('tag3214');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag7008" onclick="CopyToClipboard('tag7008');return false;" class="tag-decoration">testing-v5</div><div id="tag4888" onclick="CopyToClipboard('tag4888');return false;" class="tag-decoration">testing-v5.1</div><div id="tag25471" onclick="CopyToClipboard('tag25471');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/3af11baf0e5de25c5c954bbebe93849021f8a259" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32861171373" target="_blank">2026-08-25 14:42:17</a></td></tr>
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
