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
<tr><td><div id="tag1414" onclick="CopyToClipboard('tag1414');return false;" class="tag-decoration">nightly</div><div id="tag2781" onclick="CopyToClipboard('tag2781');return false;" class="tag-decoration">nightly-fa17041</div><div id="tag13648" onclick="CopyToClipboard('tag13648');return false;" class="tag-decoration">nightly-eae5f164e6532695d9c8adc2ec73dd995f1aaf79</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/fa17041163ccd713b2555563307d1442bc64e3f8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27007854063" target="_blank">2026-06-05 09:47:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29830" onclick="CopyToClipboard('tag29830');return false;" class="tag-decoration">release</div><div id="tag25909" onclick="CopyToClipboard('tag25909');return false;" class="tag-decoration">release-d9901aa</div><div id="tag9738" onclick="CopyToClipboard('tag9738');return false;" class="tag-decoration">release-5.0.3</div><div id="tag10474" onclick="CopyToClipboard('tag10474');return false;" class="tag-decoration">release-v5</div><div id="tag2761" onclick="CopyToClipboard('tag2761');return false;" class="tag-decoration">release-v5.0</div><div id="tag17122" onclick="CopyToClipboard('tag17122');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d9901aa1c30a39f40fe1fd6e520d4d8a5d2c2577" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082571" target="_blank">2026-05-23 13:34:17</a></td></tr>
<tr><td><div id="tag15706" onclick="CopyToClipboard('tag15706');return false;" class="tag-decoration">testing</div><div id="tag15695" onclick="CopyToClipboard('tag15695');return false;" class="tag-decoration">testing-d14bb49</div><div id="tag7823" onclick="CopyToClipboard('tag7823');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag1586" onclick="CopyToClipboard('tag1586');return false;" class="tag-decoration">testing-v5</div><div id="tag15254" onclick="CopyToClipboard('tag15254');return false;" class="tag-decoration">testing-v5.0</div><div id="tag11657" onclick="CopyToClipboard('tag11657');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d14bb4980404971ee865f3bd38954d030530e922" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082147" target="_blank">2026-05-23 13:34:16</a></td></tr>
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
