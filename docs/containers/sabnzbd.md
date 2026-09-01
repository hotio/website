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
<tr><td><div id="tag28825" onclick="CopyToClipboard('tag28825');return false;" class="tag-decoration">nightly</div><div id="tag25237" onclick="CopyToClipboard('tag25237');return false;" class="tag-decoration">nightly-543e245</div><div id="tag19309" onclick="CopyToClipboard('tag19309');return false;" class="tag-decoration">nightly-4a999a19081b76cff813b1c0e13bfea2234f314a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/543e245cca2f3927236f4d92a4ead60488940e22" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33556160831" target="_blank">2026-09-01 20:34:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17996" onclick="CopyToClipboard('tag17996');return false;" class="tag-decoration">release</div><div id="tag8332" onclick="CopyToClipboard('tag8332');return false;" class="tag-decoration">release-ad640d3</div><div id="tag28816" onclick="CopyToClipboard('tag28816');return false;" class="tag-decoration">release-5.1.2</div><div id="tag5407" onclick="CopyToClipboard('tag5407');return false;" class="tag-decoration">release-v5</div><div id="tag25296" onclick="CopyToClipboard('tag25296');return false;" class="tag-decoration">release-v5.1</div><div id="tag20845" onclick="CopyToClipboard('tag20845');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ad640d31ac3e7b1f2757e028b8b0ea8e26464d8e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33511452321" target="_blank">2026-09-01 13:06:43</a></td></tr>
<tr><td><div id="tag2511" onclick="CopyToClipboard('tag2511');return false;" class="tag-decoration">testing</div><div id="tag6395" onclick="CopyToClipboard('tag6395');return false;" class="tag-decoration">testing-879b8aa</div><div id="tag28746" onclick="CopyToClipboard('tag28746');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag24578" onclick="CopyToClipboard('tag24578');return false;" class="tag-decoration">testing-v5</div><div id="tag11032" onclick="CopyToClipboard('tag11032');return false;" class="tag-decoration">testing-v5.1</div><div id="tag23373" onclick="CopyToClipboard('tag23373');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/879b8aa249ff15a05b34c477b81f70d1c41b5e52" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33511455115" target="_blank">2026-09-01 13:06:45</a></td></tr>
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
