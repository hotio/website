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
<tr><td><div id="tag10180" onclick="CopyToClipboard('tag10180');return false;" class="tag-decoration">nightly</div><div id="tag25830" onclick="CopyToClipboard('tag25830');return false;" class="tag-decoration">nightly-9edfe6a</div><div id="tag13148" onclick="CopyToClipboard('tag13148');return false;" class="tag-decoration">nightly-9748bcf63f38035074d6cfad6a407812c3da59d7</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/9edfe6af3538dd709c3f8afecdd1318279094b3f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39684019543" target="_blank">2026-10-21 22:06:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19823" onclick="CopyToClipboard('tag19823');return false;" class="tag-decoration">release</div><div id="tag31526" onclick="CopyToClipboard('tag31526');return false;" class="tag-decoration">release-cc6aef3</div><div id="tag1359" onclick="CopyToClipboard('tag1359');return false;" class="tag-decoration">release-5.1.3</div><div id="tag27984" onclick="CopyToClipboard('tag27984');return false;" class="tag-decoration">release-v5</div><div id="tag22403" onclick="CopyToClipboard('tag22403');return false;" class="tag-decoration">release-v5.1</div><div id="tag30697" onclick="CopyToClipboard('tag30697');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/cc6aef32c11a2d8b4a5fb4dd184d77b7f93d0d60" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39684017674" target="_blank">2026-10-21 22:06:18</a></td></tr>
<tr><td><div id="tag19452" onclick="CopyToClipboard('tag19452');return false;" class="tag-decoration">testing</div><div id="tag8001" onclick="CopyToClipboard('tag8001');return false;" class="tag-decoration">testing-c6c599c</div><div id="tag820" onclick="CopyToClipboard('tag820');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c6c599c5f2cb1a29594a5947a29488156118eb29" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39652238071" target="_blank">2026-10-21 18:23:08</a></td></tr>
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
