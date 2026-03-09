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
<tr><td><div id="tag2335" onclick="CopyToClipboard('tag2335');return false;" class="tag-decoration">nightly</div><div id="tag27117" onclick="CopyToClipboard('tag27117');return false;" class="tag-decoration">nightly-cac967c</div><div id="tag2084" onclick="CopyToClipboard('tag2084');return false;" class="tag-decoration">nightly-189089547c8fd511fc9f744ce50748ae058aaf93</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/cac967cd2d5b2e066903f000e5a488250279d67a" target="_blank">Version update: 9113ca4aeb8de64ed556880da9af8a97225d4491 => 189089547c8fd511fc9f744ce50748ae058aaf93</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22860341381" target="_blank">2026-03-09 15:15:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7717" onclick="CopyToClipboard('tag7717');return false;" class="tag-decoration">release</div><div id="tag26179" onclick="CopyToClipboard('tag26179');return false;" class="tag-decoration">release-48d37cb</div><div id="tag31311" onclick="CopyToClipboard('tag31311');return false;" class="tag-decoration">release-4.5.5</div><div id="tag30047" onclick="CopyToClipboard('tag30047');return false;" class="tag-decoration">release-v4</div><div id="tag31525" onclick="CopyToClipboard('tag31525');return false;" class="tag-decoration">release-v4.5</div><div id="tag16050" onclick="CopyToClipboard('tag16050');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/48d37cb3372619463a25e66c0e4e9e4195bca12c" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292136862" target="_blank">2026-02-23 03:44:18</a></td></tr>
<tr><td><div id="tag26505" onclick="CopyToClipboard('tag26505');return false;" class="tag-decoration">testing</div><div id="tag11879" onclick="CopyToClipboard('tag11879');return false;" class="tag-decoration">testing-ed3f736</div><div id="tag5938" onclick="CopyToClipboard('tag5938');return false;" class="tag-decoration">testing-5.0.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ed3f736adb5c08b6b0fc986b06d466d3d4d41601" target="_blank">Version update: 5.0.0Beta1 => 5.0.0Beta2</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22490144729" target="_blank">2026-02-27 14:27:09</a></td></tr>
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
