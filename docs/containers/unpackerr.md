---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag19185" onclick="CopyToClipboard('tag19185');return false;" class="tag-decoration">nightly</div><div id="tag698" onclick="CopyToClipboard('tag698');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div><div id="tag27384" onclick="CopyToClipboard('tag27384');return false;" class="tag-decoration">nightly-a2f2f4c</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/a2f2f4cbe0c6a2019f02578d53533e7afdb9627a" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20770110587" target="_blank">2026-01-07 03:58:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6451" onclick="CopyToClipboard('tag6451');return false;" class="tag-decoration">release</div><div id="tag1980" onclick="CopyToClipboard('tag1980');return false;" class="tag-decoration">release-0.14.5</div><div id="tag5938" onclick="CopyToClipboard('tag5938');return false;" class="tag-decoration">release-622df42</div><div id="tag18279" onclick="CopyToClipboard('tag18279');return false;" class="tag-decoration">release-v0</div><div id="tag21932" onclick="CopyToClipboard('tag21932');return false;" class="tag-decoration">release-v0.14</div><div id="tag24324" onclick="CopyToClipboard('tag24324');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/622df4232c28e1a6d2fa7883594a5b336292c277" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20770110788" target="_blank">2026-01-07 03:58:05</a></td></tr>
<tr><td><div id="tag6027" onclick="CopyToClipboard('tag6027');return false;" class="tag-decoration">testing</div><div id="tag31954" onclick="CopyToClipboard('tag31954');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag26200" onclick="CopyToClipboard('tag26200');return false;" class="tag-decoration">testing-50751cb</div><div id="tag18962" onclick="CopyToClipboard('tag18962');return false;" class="tag-decoration">testing-v0</div><div id="tag2464" onclick="CopyToClipboard('tag2464');return false;" class="tag-decoration">testing-v0.14</div><div id="tag16341" onclick="CopyToClipboard('tag16341');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/50751cba68c2ed578b3b71b001e52acab425616d" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20770111050" target="_blank">2026-01-07 03:58:06</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
