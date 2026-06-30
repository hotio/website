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
<tr><td><div id="tag11552" onclick="CopyToClipboard('tag11552');return false;" class="tag-decoration">nightly</div><div id="tag28796" onclick="CopyToClipboard('tag28796');return false;" class="tag-decoration">nightly-0333852</div><div id="tag20770" onclick="CopyToClipboard('tag20770');return false;" class="tag-decoration">nightly-dbe7cb336d9f09ba4e782fb88854a7cfa8a59563</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/0333852d4a5e8f4be4ef7c5a05a96b33ac4bca7a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28391040538" target="_blank">2026-06-29 17:35:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20574" onclick="CopyToClipboard('tag20574');return false;" class="tag-decoration">release</div><div id="tag31624" onclick="CopyToClipboard('tag31624');return false;" class="tag-decoration">release-eecbbc4</div><div id="tag4923" onclick="CopyToClipboard('tag4923');return false;" class="tag-decoration">release-5.0.4</div><div id="tag25536" onclick="CopyToClipboard('tag25536');return false;" class="tag-decoration">release-v5</div><div id="tag22945" onclick="CopyToClipboard('tag22945');return false;" class="tag-decoration">release-v5.0</div><div id="tag27729" onclick="CopyToClipboard('tag27729');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/eecbbc43e6033bbd04e538b755381b415e9da9d1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28391041184" target="_blank">2026-06-29 17:35:44</a></td></tr>
<tr><td><div id="tag4967" onclick="CopyToClipboard('tag4967');return false;" class="tag-decoration">testing</div><div id="tag9219" onclick="CopyToClipboard('tag9219');return false;" class="tag-decoration">testing-7eb9b92</div><div id="tag4568" onclick="CopyToClipboard('tag4568');return false;" class="tag-decoration">testing-5.1.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7eb9b928e35c5d4a37c3cdfd9802bb0cdd52b9e0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28443081600" target="_blank">2026-06-30 12:07:34</a></td></tr>
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
