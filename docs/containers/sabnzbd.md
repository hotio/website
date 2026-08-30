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
<tr><td><div id="tag30920" onclick="CopyToClipboard('tag30920');return false;" class="tag-decoration">nightly</div><div id="tag4485" onclick="CopyToClipboard('tag4485');return false;" class="tag-decoration">nightly-9e1f7be</div><div id="tag3723" onclick="CopyToClipboard('tag3723');return false;" class="tag-decoration">nightly-eb673d3956fd72c5099e8317a82a5a9e8ef323e8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/9e1f7be3db5a063d9c0ff32f811c9fd146d3d11c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33314498276" target="_blank">2026-08-30 13:33:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27860" onclick="CopyToClipboard('tag27860');return false;" class="tag-decoration">release</div><div id="tag2151" onclick="CopyToClipboard('tag2151');return false;" class="tag-decoration">release-c77e1d1</div><div id="tag11930" onclick="CopyToClipboard('tag11930');return false;" class="tag-decoration">release-5.1.2</div><div id="tag25088" onclick="CopyToClipboard('tag25088');return false;" class="tag-decoration">release-v5</div><div id="tag32387" onclick="CopyToClipboard('tag32387');return false;" class="tag-decoration">release-v5.1</div><div id="tag27701" onclick="CopyToClipboard('tag27701');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c77e1d113da93e02e23a53f679612b1db77f7263" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918043872" target="_blank">2026-08-26 01:11:35</a></td></tr>
<tr><td><div id="tag13822" onclick="CopyToClipboard('tag13822');return false;" class="tag-decoration">testing</div><div id="tag539" onclick="CopyToClipboard('tag539');return false;" class="tag-decoration">testing-7edd9a2</div><div id="tag17591" onclick="CopyToClipboard('tag17591');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag13217" onclick="CopyToClipboard('tag13217');return false;" class="tag-decoration">testing-v5</div><div id="tag25171" onclick="CopyToClipboard('tag25171');return false;" class="tag-decoration">testing-v5.1</div><div id="tag2419" onclick="CopyToClipboard('tag2419');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7edd9a2b7ea52df607e60ab4c8dbf62c2c07a12b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918041543" target="_blank">2026-08-26 01:11:35</a></td></tr>
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
