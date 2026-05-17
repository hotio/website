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
<tr><td><div id="tag2310" onclick="CopyToClipboard('tag2310');return false;" class="tag-decoration">nightly</div><div id="tag8622" onclick="CopyToClipboard('tag8622');return false;" class="tag-decoration">nightly-58637f2</div><div id="tag19325" onclick="CopyToClipboard('tag19325');return false;" class="tag-decoration">nightly-d7ca91e3955f7c87dcd662c33469740fc9791206</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/58637f282ab00712971517575ea9fa9595ca7278" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25986626842" target="_blank">2026-05-17 09:04:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23175" onclick="CopyToClipboard('tag23175');return false;" class="tag-decoration">release</div><div id="tag18847" onclick="CopyToClipboard('tag18847');return false;" class="tag-decoration">release-a6ba59c</div><div id="tag7736" onclick="CopyToClipboard('tag7736');return false;" class="tag-decoration">release-5.0.3</div><div id="tag14430" onclick="CopyToClipboard('tag14430');return false;" class="tag-decoration">release-v5</div><div id="tag8912" onclick="CopyToClipboard('tag8912');return false;" class="tag-decoration">release-v5.0</div><div id="tag28805" onclick="CopyToClipboard('tag28805');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a6ba59ce4cf9fddd8e375a5a90a67147733e1a08" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25931733511" target="_blank">2026-05-15 17:26:46</a></td></tr>
<tr><td><div id="tag21119" onclick="CopyToClipboard('tag21119');return false;" class="tag-decoration">testing</div><div id="tag19778" onclick="CopyToClipboard('tag19778');return false;" class="tag-decoration">testing-2b94a3d</div><div id="tag9219" onclick="CopyToClipboard('tag9219');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag30207" onclick="CopyToClipboard('tag30207');return false;" class="tag-decoration">testing-v5</div><div id="tag29985" onclick="CopyToClipboard('tag29985');return false;" class="tag-decoration">testing-v5.0</div><div id="tag15472" onclick="CopyToClipboard('tag15472');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2b94a3d3acb027ec09d6d8e0b707e9568705b72e" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25986626347" target="_blank">2026-05-17 09:04:50</a></td></tr>
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
